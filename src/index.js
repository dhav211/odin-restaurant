import './style.css'
import {getHeader} from './header';
import { getContent, setContent } from './content';
import { getHomeContent } from './home';

document.body.appendChild(getHeader());
document.body.appendChild(getContent());

setContent(getHomeContent());
