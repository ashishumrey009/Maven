describe('The Pair Sum',function(){
    it('add two numbers with given sum',function(){

        var arr = [1,2,4];
        var sum = 3;
		
        var result = MAKE_SUM.quickstart.makeSum(arr, sum);
        expect(result).toEqual([1,2]);
    });
	

});