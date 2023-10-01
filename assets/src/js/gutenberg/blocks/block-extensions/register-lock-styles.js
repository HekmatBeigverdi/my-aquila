/*
    Register Block Styles
 */

import { registerBlockStyle} from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

const layoutStyleButton =[
    {
        name: 'layout-border-blue-fill',
        label: __('Blue Outline', 'aquila')
    },
    {
        name: 'layout-border-white-no-fill',
        label: __('White Outline - to be used with dark background', 'aquila')
    },
]

const register= () =>{
    layoutStyleButton.forEach( layoutStyle => registerBlockStyle('core/button', layoutStyle))
}
/**
 * Register Style on dom ready
 */
wp.domReady(()=>{
    register();
})