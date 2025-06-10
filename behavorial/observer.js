// Observer
// kinda broken rn cuz no module BUT this is similar to a proxy on how it has multiple listeners that listen and "subscribe" to changes in a class.
import {Subject} from 'rxjs'

const news = new Subject();

const tf1 = news.subscribe(v => console.log(v + 'via Den TV'));

news.next('Breaking news: ');