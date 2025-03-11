// app/api/create-payment-link/route.ts
import { SquareClient } from 'square' // default import
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: Request) {
	const idempotencyKey = uuidv4()

	const client = new SquareClient({
		environment:
			process.env.SQUARE_ENVIRONMENT === 'production'
				? 'production'
				: 'sandbox',
		token: process.env.SQUARE_ACCESS_TOKEN!,
		baseUrl:
			process.env.SQUARE_ENVIRONMENT === 'production'
				? 'https://connect.squareup.com'
				: 'https://connect.squareupsandbox.com',
	})

	// Use type assertion if necessary (if TypeScript still complains about paymentLinksApi)
	const paymentLinksApi = client.checkout.paymentLinks

	try {
		const response = await paymentLinksApi.create({
			idempotencyKey,
			checkoutOptions: {
				acceptedPaymentMethods: {
					applePay: true,
					googlePay: true,
					cashAppPay: true,
				},
				merchantSupportEmail:
					process.env.SQUARE_MERCHANT_SUPPORT_EMAIL || 'your_email@example.com',
				redirectUrl: process.env.SQUARE_REDIRECT_URL!,
			},
			quickPay: {
				locationId: process.env.SQUARE_LOCATION_ID!,
				name: 'Buy Me A Coffee',
				priceMoney: {
					amount: BigInt(300), // $3.00 in cents as a number
					currency: 'USD',
				},
			},
		})

		const paymentLinkUrl = response.paymentLink?.longUrl
		if (!paymentLinkUrl) {
			return NextResponse.json(
				{ error: 'Payment link URL not generated' },
				{ status: 500 }
			)
		}
		return NextResponse.json({ paymentLinkUrl })
	} catch (error: any) {
		console.error('Error creating payment link:', error)
		return NextResponse.json({ error: error.message }, { status: 500 })
	}
}
