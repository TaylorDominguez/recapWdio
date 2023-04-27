import Page from './page.js';

        /**
         * sub page containing specific selectors and methods for a specific page
        */

        // Your class goes here. 
        class loadingPage extends Page 
        {
        get startButton () {
            return $('#start > button')
        }
        get helloWorld () {
            return $('//*[@id="finish"]/h4')
        }
            /**
             * overwrite specific options to adapt it to page object
            */
            open() {
                return super.open('dynamic_loading/2');
            }
        }

        export default new loadingPage();