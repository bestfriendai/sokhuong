import { Page1 } from './Page1'
import { Page2 } from './Page2'
import { Page3 } from './Page3'
import { Page4 } from './Page4'

export const HtmlContent = () => {
	return (
		<div className="relative w-full h-full">
			<Page1 />
			<Page2 />
			<Page3 />
			<Page4 />
		</div>
	)
}
