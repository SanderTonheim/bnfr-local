import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import s from '../styles/map.module.css'

export default function CompanyMap({ lat, lng }) {
	const cord = { lat: lat, lng: lng }
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyD4UD_3-eGEmZOGaMtA5lgLbLBoU7VVegM',
	})
	if (!isLoaded) {
		return console.log()
	}

	return (
		<div className={s.map}>
			<GoogleMap
				center={cord}
				zoom={15}
				mapContainerStyle={{ height: '100%', width: '100%' }}
				options={{
					zoomControl: false,
					mapTypeControl: false,
					fullscreenControl: false,
					streetViewControl: false,
				}}>
				<Marker position={cord} />
			</GoogleMap>
		</div>
	)
}
