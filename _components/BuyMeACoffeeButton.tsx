// app/components/BuyMeACoffeeButton.tsx
'use client'

import { useState } from 'react'

export default function BuyMeACoffeeButton() {
	const [loading, setLoading] = useState(false)

	const handleBuyCoffee = async () => {
		setLoading(true)
		const currentUrl = window.location.href
		try {
			const res = await fetch('/api/create-checkout', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ redirect: currentUrl }),
			})
			const data = await res.json()
			if (data.paymentLinkUrl) {
				window.location.href = data.paymentLinkUrl
			} else {
				console.error('Error:', data.error)
				setLoading(false)
			}
		} catch (error) {
			console.error('Error creating payment link:', error)
			setLoading(false)
		}
	}

	return (
		<button
			onClick={handleBuyCoffee}
			disabled={loading}
			style={{ padding: '0.5rem 1rem', fontSize: '1.2rem' }}
		>
			{loading ? 'Processing...' : 'Buy Me a Coffee ($3.00)'}
		</button>
	)
}
