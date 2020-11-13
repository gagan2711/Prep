QUnit.test("Utility", function(assert) {
    //Basic Tests of Utility //
    assert.ok(Utility, "Utility object is available!!");
    
    assert.ok(Utility.createElement && Utility.createElement instanceof Function, "Utility has a createElement API");
    assert.ok(Utility.newListItem && Utility.newListItem instanceof Function, "Utility has a newListItem API");
    //Testing createElement APIs
    var testClick = function() {
        assert.ok(true, "Event register check !!");
    }
    var sampleElement = Utility.createElement("div", "testClass", "Content", [{
        name: "click",
        handler: testClick
    }]);
    
    assert.ok(sampleElement.getElement().className === "testClass", "Element Class name check !!");
    assert.ok(sampleElement.getElement().innerHTML === "Content", "Element content  check !!");
    $(sampleElement.getElement()).trigger("click");

    
    
    
    //Testing newListItem APIs 
    var $testParent = $("<div></div>");
    var listItem = Utility.newListItem("listItem1");
    assert.ok(listItem.getListItem().className === "listItem1", "List Item Class name check !!");

    var $testChild = Utility.createElement("div", "testChild").getElement();
    listItem.appendChild($testChild);
    assert.ok(listItem.getListItem().querySelector(".testChild"), "List Item appendChild API check !!");

    $testParent.append(listItem.getListItem());
    var listItem2 = Utility.newListItem("listItem2");
    $testParent.append(listItem2.getListItem());

    listItem2.moveToTop();
    assert.ok($testParent.children()[0].className === "listItem2", "List Item moveToTop API check !!");

    listItem2.removeFromList();
    assert.ok(typeof $testParent.find(".listItem2")[0] == "undefined", "List Item removeFromList API check !!");
});




QUnit.test("Header", function(assert) {
    //Basic Tests of Utility //
    var header = getHeader();
    assert.ok(header, "header class is available!!");

    var $inputBox = $(header).find(".taskInput");
    assert.ok(typeof $inputBox[0] != "undefined", "inputBox is there");

    var $addBtn = $(header).find(".addBtn");
    assert.ok(typeof $addBtn[0] != "undefined", "add Button is there");
    assert.ok($addBtn.prop("disabled"), "add Button is disabled By Default");

    $inputBox.val("Testing Value");
    $inputBox.trigger("click");
    assert.ok(!$addBtn.prop("disabled"), "add Button is enabled after adding value to input Box");
    $addBtn.trigger("click");

});
QUnit.test("ListContainer", function(assert) {
    assert.ok(ListContainer, "ListContainer object is available!!");
    assert.ok(ListContainer.$listContainer, "ListContainer has $listContainer element !!");
    
    var countBeforeAddingItem = ListContainer.$listContainer.childElementCount;
    debugger;
    ListContainer.addItemToListContainer("Testing Item");
    assert.ok((ListContainer.$listContainer.childElementCount - countBeforeAddingItem) == 1, "List item created Successfully !!")
});