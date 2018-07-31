import CombineAllContainer from './CombineAllContainer';
import CombineLastestContainer from './CombineLastestContainer';
import ObservableClickFromEventContainer from './ObservableClickFromEventContainer';
import ObservableEventFilterContainer from './ObservableEventFilterContainer';

export const RxjsType = {
	conbineAll: 'conbine-all',
	combineLastest: 'combine-lastest',
	fromEvent: 'from-event',
	filterFomEvent: 'filter-from-event',
}

const RenderRxJsContainer = (rxjsType) => {
	switch (rxjsType) {
		case RxjsType.combineLastest:
			return CombineLastestContainer;
		case RxjsType.fromEvent:
			return ObservableClickFromEventContainer;
		case RxjsType.filterFomEvent:
			return ObservableEventFilterContainer;
		default:
			return CombineAllContainer;
	}
}

export default RenderRxJsContainer;