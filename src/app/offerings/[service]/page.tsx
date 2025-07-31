interface ServicePageProps {
  params: Promise<{
    service: string
  }>
}

const serviceData = {
  'service-a': {
    title: 'Service A - Webentwicklung',
    description: 'Professionelle Webentwicklungsdienste mit modernen Frameworks und Best Practices.',
    features: [
      'Maßgeschneidetes responsives Design',
      'Performance-Optimierung',
      'SEO-freundliche Architektur',
      'Progressive Web Apps'
    ],
    color: 'blue'
  },
  'service-b': {
    title: 'Service B - Mobile Anwendungen',
    description: 'Native und plattformübergreifende mobile App-Entwicklung für iOS und Android.',
    features: [
      'React Native Entwicklung',
      'Native iOS/Android Apps',
      'App Store Optimierung',
      'Push-Benachrichtigungen'
    ],
    color: 'green'
  },
  'service-c': {
    title: 'Service C - Cloud-Lösungen',
    description: 'Skalierbare Cloud-Infrastruktur und DevOps-Dienste für Ihr Unternehmen.',
    features: [
      'AWS/Azure/GCP Bereitstellung',
      'CI/CD Pipelines',
      'Container-Orchestrierung',
      'Infrastructure as Code'
    ],
    color: 'purple'
  }
}

export default async function ServicePage(props: ServicePageProps) {
  const params = await props.params;
  const service = serviceData[params.service as keyof typeof serviceData] || {
    title: `Service ${params.service}`,
    description: 'Service-Details folgen in Kürze.',
    features: [],
    color: 'gray'
  }

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    gray: 'bg-gray-50 border-gray-200 text-gray-700'
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
      <p className="text-gray-600 mb-6">{service.description}</p>
      
      <div className={`${colorClasses[service.color as keyof typeof colorClasses]} border-2 rounded-lg p-6 mb-6`}>
        <h3 className="text-xl font-semibold mb-4">Hauptmerkmale</h3>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-gray-100 rounded-lg p-6">
        <p className="text-sm text-gray-600 mb-4">
          Dies ist eine dynamische Route. Der aktuelle Service-Parameter ist: <code className="bg-white px-2 py-1 rounded">{params.service}</code>
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Starten Sie mit {service.title.split(' - ')[0]}
        </button>
      </div>
    </div>
  )
}