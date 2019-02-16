import { configure } from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";


// This could also be moved under cypress/support if
// using enzyme in multiple tests
export function configureEnzyme() {
    configure({ adapter: new Adapter() });
}
