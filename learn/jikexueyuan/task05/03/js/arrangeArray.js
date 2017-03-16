/*
* @Author: ZHouYanWei
* @Date:   2017-01-11 05:21:38
* @Last Modified by:   ZHouYanWei
* @Last Modified time: 2017-01-14 15:13:26
*/

/*****************************************************************************
 * 说明：
 * 对用户输入数据的处理，主要是按照要求对用户输入的数据进行结构化处理，并超出出现频率
 * 最高的元素并返回给调用者。当前实现逻辑是返回所有出现平率最多的元素。
 * **************************************************************************/

// 定义一个元素Obj，用于后续数据统一调用。
function cProcessedItem() {
	this.item = "";							//用于保存出现的元素。
	this.count = 0;  						//用于保存出现的个数。
	this.position = [];						//用于保存出现的位置。
	this.addCount = function () { this.count++; };//添加一次出现的个数
};

// 处理用户输入，并形成结构化的结果
// 入参：inputValue，用户输入的数组字符串，以','为分隔符
// 输出：输出包含多个cProcessedItem对象的数组。每个cProcessedItem保存了用户输入数组的元素，及这个元素出现的次数和位置。
function processData(inputValue) {
	var inputArray = inputValue.split(',');
	var processReslut = [];
	var inputIndex = 0;
	
	// 遍历每个输入的元素
	for (inputItem in inputArray) {
		var findTag = false;
		
		// 在现有结果中寻找，是否有与当前输入元素匹配项。如果有则记录数量和位置。
		for (resultItem in processReslut) {
			if (inputArray[inputItem] == processReslut[resultItem].item) {
				findTag = true;
				processReslut[resultItem].addCount();
				processReslut[resultItem].position[processReslut[resultItem].position.length] = inputItem;
			}
		}
		// 如果没有找到，则新增当前输入元素到现有结果中。
		if (findTag == false) {
			var processedItem = new cProcessedItem();
			processedItem.item = inputArray[inputItem];
			processedItem.addCount();
			processedItem.position[processedItem.position.length] = inputItem;
			processReslut[processReslut.length] = processedItem;
		}
	}
	return processReslut;
}

// 找到出现数量最多的元素
// 入参：processReslut，经过processData处理过的结果。
// 返回：返回出现频率最高的cProcessedItem对象的数组。
function findTheMost(processResult) {
	// 判断入参是否是数组，并且数组的元素至少有1个。
	if (Array.isArray(processResult) && processResult.length > 0) {
		var theMost = processResult[0];
		var theMostArray = new Array();
		// 遍历结果元素中，每一个元素
		for (var item = 0; item < processResult.length; item++) {
			// 判断是否是最后一个元素，如果是，
			if (typeof (processResult[item + 1]) == "undefined") {
				break;
			}
			else {
				if (processResult[item + 1].count > theMost.count) {
					theMost = processResult[item + 1];
				}
			}
		}

		//再遍历一次，找到结果元素中，出现个数与最高次相等的元素。 
		for (var index = 0; index < processResult.length; index++) {
			if (processResult[index].count == theMost.count) {
				theMostArray[theMostArray.length] = processResult[index];
			}
		}
		
		// 返回所有最高次相等的元素。
		return theMostArray;
	}
}