function getEnclosingWidget(ele: any) {
    //'mxui_widget_Wrapper_0'
    ele.lastElementChild.getAttribute("widgetid");
    ele.parentElement.getAttribute("widgetid");
    //'4.MyFirstModule.BigScreen2.layoutGrid2'
    ele.getAttribute("data-mendix-id");


    // todo
    // dataview 4.MyFirstModule.BigScreen2.dataView2 
    // enclose widget 
}

export default () => {
/*     window.require(["dijit/registry"], r => {
        const w1 = r.byId("mxui_widget_Wrapper_0");
        w1._store.entries['{"widgetId":"4.MyFirstModule.BigScreen2.dataView2","slot":"object"}'].get$();
    });
 */};
