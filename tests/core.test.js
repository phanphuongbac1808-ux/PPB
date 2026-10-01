const test=require('node:test'),assert=require('node:assert/strict'),core=require('../core.js');
const task={id:'1',title:'Báo cáo',category:'Việc',due:'',priority:'high',status:'todo',before:90,after:15,frequency:1,setup:150,rate:100000};
test('Tiết kiệm, giá trị và hoàn vốn',()=>{assert.deepEqual(core.metrics([task]),{minutes:75,value:125000,setup:150,payback:2,done:0});});
test('Quy trình chậm hơn làm giảm tổng tiết kiệm',()=>{assert.equal(core.metrics([task,{...task,id:'2',before:10,after:20,frequency:2}]).minutes,55);});
test('Không báo hoàn vốn khi tổng tiết kiệm âm hoặc bằng không',()=>{assert.equal(core.metrics([]).payback,null);assert.equal(core.metrics([{...task,after:100}]).payback,null);});
test('Sao lưu có thể khôi phục và loại bỏ thuộc tính lạ',()=>{const clean=core.validate([{...task,extra:'ignored'}]);assert.deepEqual(clean,[task]);assert.deepEqual(core.validate(JSON.parse(JSON.stringify(clean))),[task]);});
test('Chặn bản sao lỗi, trùng ID, số âm và Infinity',()=>{for(const value of [null,[task,task],[{...task,frequency:-1}],[{...task,rate:Infinity}],[{...task,status:'invalid'}],[{...task,title:'  '}],[{...task,before:'90'}]])assert.throws(()=>core.validate(value));});
test('CSV giữ tên tiếng Việt, escape dấu ngoặc kép và chặn công thức',()=>{const csv=core.csv([{...task,title:'=SUM(1,2)'},{...task,id:'2',title:'Tên "mẫu"'}]);assert.ok(csv.startsWith('\uFEFF'));assert.ok(csv.includes("'="));assert.ok(csv.includes('Tên ""mẫu""'));});
