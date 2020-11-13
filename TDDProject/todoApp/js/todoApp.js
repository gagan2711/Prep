/**
 * Object
 * @attribute  {[function]}      createElement            wrapper for creating any type of widget and adding events to them.
 * @attribute  {[function]}      newListItem              Wrapper to create a new list item with element.
 * @return none  
 */
var Utility = {
    createElement: function(type, className, content, events) {
        var $element = document.createElement(type);
        if (typeof className != "undefined") $element.className = className;
        if (typeof content != "undefined") $element.innerHTML = content;
        if (typeof events != "undefined") {
            for (var i = 0; i < events.length; i++) {
                $element.addEventListener(events[i].name, events[i].handler);
            }
        }
        return {
            getElement: function() {
                return $element;
            },
            enable: function() {
                $element.disabled = false;
            },
            disable: function() {
                $element.disabled = true;
            },
            getValue: function() {
                return $element.value;
            },
            setValue: function(value) {
                $element.value = value;
            }
        }
    },
    newListItem: function(className) {
        var $listItem = document.createElement("div");
        $listItem.className = className;
        return {
            getListItem: function() {
                return $listItem;
            },
            moveToTop: function() {
                $listItem.parentElement.insertBefore($listItem, $listItem.parentElement.firstChild);
            },
            removeFromList: function() {
                if($listItem.remove){//Remove is not supported is IE.
                    $listItem.remove();
                }
                else{
                    $listItem.parentNode.removeChild($listItem);
                }
            },
            done: function() {
                $listItem.className = $listItem.className + " selectedItem";
            },
            appendChild: function(child) {
                $listItem.appendChild(child);
            }
        }
    }
};
/**
 * Constructor:- which will create a header and the content of the header. Their is a clouser for comunication bw input box and add button.
 * @return   {[HTML element]}  $header    
 */
var getHeader = function() {
    var $header = Utility.createElement("div", "header").getElement();
    var $taskInput = Utility.createElement("input", "taskInput", undefined, [{
        name: "keyup",
        handler: changeAddBtnStatus
    }, {
        name: "click",
        handler: changeAddBtnStatus
    }]);
    var $addTaskButton = Utility.createElement("button", "addBtn", "Add To List", [{
        name: "click",
        handler: addItemToList
    }]);

    function changeAddBtnStatus() {
        if ($taskInput.getValue().length > 0) {
            $addTaskButton.enable();
        } else {
            $addTaskButton.disable();
        }
    }

    function addItemToList() {
        if ($taskInput.getValue().length > 0) {
            ListContainer.addItemToListContainer($taskInput.getValue());
            $addTaskButton.disable();
            $taskInput.setValue("");
        }
    }
    $addTaskButton.disable();
    $header.appendChild($taskInput.getElement());
    $header.appendChild($addTaskButton.getElement());
    return $header;
};
/**
 * Object
 * @attribute  {[HTML element]}  $listContainer            task list container
 * @attribute  {[function]}      addItemToListContainer    API to add the element to container
 * @return none  
 */
var ListContainer = {
    $listContainer: Utility.createElement("div", "listContainer").getElement(),
    /**
     * API :- To add item to list container.
     * @param  {[text]}  message   [required]  task message
     * @return none;
     */
    addItemToListContainer: function(message) {
        var listItem = Utility.newListItem("listItem");
        /*Add  and register Done button */
        listItem.appendChild(Utility.createElement("div", "btn btnDone", undefined, [{
            name: "click",
            handler: listItem.done
        }]).getElement());
        /*Add  and register message block */
        listItem.appendChild(Utility.createElement("div", "msgBlock", message).getElement());
        /*Add  and register cancel and Up button */
        var floatRight = Utility.createElement("div", "floatRight");
        floatRight.getElement().appendChild(Utility.createElement("div", "btn btnUp", undefined, [{
            name: "click",
            handler: listItem.moveToTop
        }]).getElement());
        floatRight.getElement().appendChild(Utility.createElement("div", "btn btnCancel", undefined, [{
            name: "click",
            handler: listItem.removeFromList
        }]).getElement());
        listItem.appendChild(floatRight.getElement());
        /*Add item to the contaier*/
        this.$listContainer.appendChild(listItem.getListItem());
    }
};
/**
 * Object
 * @attribute  {[function]}  start  To start the App
 * @param  none
 * @return none  
 */
var ToDoApp = {
    /**
     * API :- To start the app.
     * @param  {[HTML element]}  $appContainer   [required]  html container where the App will be loaded
     * @param  {[List]}          taskList        [optional]  If you have list of tasks before starting the App {Yet to implement}
     * @return none;
     */
    start: function($appContainer, taskList) {
        $appContainer.appendChild(getHeader());
        $appContainer.appendChild(ListContainer.$listContainer);
    },
};