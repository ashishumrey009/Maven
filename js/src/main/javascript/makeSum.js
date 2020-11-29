
var MAKE_SUM = MAKE_SUM || {};
MAKE_SUM.quickstart = function () {

    /**
     * Public interface
     * @scope DE_AKQUINET.quickstart
     */
    return {

        /**
         * Adds two numbers ...
         * @param number1 first number
         * @param number2 second number
         * @return the sum of the two numbers
         */
        makeSum : function(arr, sum) {
            for(var i=0;i<arr.length;i++){
	         for(var j=i+1;j<arr.length;j++){
		       if(arr[i]+arr[j]===sum){
			var val = [arr[i],arr[j]];
			return val;
		}
	}
}
return -1
        },
		
    };
} ();