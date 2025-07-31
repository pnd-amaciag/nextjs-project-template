import Link from "next/link"

export default function OfferingsPage() {
  const offerings = [
    {
      id: 'service-a',
      title: 'Web Development',
      description: 'Build modern, responsive websites and web applications',
      icon: '🌐'
    },
    {
      id: 'service-b',
      title: 'Mobile Applications',
      description: 'Create powerful mobile apps for iOS and Android',
      icon: '📱'
    },
    {
      id: 'service-c',
      title: 'Cloud Solutions',
      description: 'Deploy and scale your applications in the cloud',
      icon: '☁️'
    }
  ]
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Choose a Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offerings.map((offering) => (
          <Link
            key={offering.id}
            href={`/offerings/${offering.id}`}
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{offering.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
            <p className="text-gray-600">{offering.description}</p>
            <div className="mt-4 text-blue-600 font-medium">
              Learn more →
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}