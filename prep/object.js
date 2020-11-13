Object.defineProperty({}, 'name', {
	value: 'gagan',
	writable: true,
	enumerable: true,
	configurable: false
});
Object.defineProperties(
	{},
	{
		prop1: {
			value: 'asd',
			enumerable: false
		},
		prop2: {}
	}
);
function SingletonModule() {
	function init() {
		return {};
	}
	var instance;
	return {
		getInstance: function() {
			if (!instance) {
				instance = init();
			}
			return instance;
		}
	};
}
var obj = Object.create(
	{
		show: function() {
			this.name;
		}
	},
	{ name: { value: 'gagab' } }
);


function debounce(func,delay){
    let timeout;
	return ()=>{
		timeout && clearTimeout(timeout)
		timeout = setTimeout(function(){
			func();
		},delay)
	}
}