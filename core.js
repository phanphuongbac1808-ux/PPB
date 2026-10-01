(function(root){
  'use strict';
  const statuses=['todo','doing','done'];
  function validate(items){
    if(!Array.isArray(items)||items.length>1000) throw Error('Danh sách không hợp lệ hoặc vượt 1.000 công việc.');
    const ids=new Set();
    return items.map(x=>{
      if(!x||typeof x.id!=='string'||!x.id||ids.has(x.id)||typeof x.title!=='string'||!x.title.trim()||x.title.length>150||!statuses.includes(x.status)||!['low','medium','high'].includes(x.priority)||typeof x.category!=='string'||x.category.length>80||typeof x.due!=='string'||(x.due&&!/^\d{4}-\d{2}-\d{2}$/.test(x.due)))throw Error('Một công việc có thông tin không hợp lệ.');
      for(const k of ['before','after','frequency','setup','rate'])if(typeof x[k]!=='number'||!Number.isFinite(x[k])||x[k]<0||x[k]>10000000)throw Error('Các số phải từ 0 đến 10.000.000.');
      ids.add(x.id);return {id:x.id,title:x.title.trim(),status:x.status,priority:x.priority,category:x.category,due:x.due,before:x.before,after:x.after,frequency:x.frequency,setup:x.setup,rate:x.rate};
    });
  }
  const weekly=x=>(x.before-x.after)*x.frequency;
  function metrics(items){const minutes=items.reduce((s,x)=>s+weekly(x),0),value=items.reduce((s,x)=>s+weekly(x)/60*x.rate,0),setup=items.reduce((s,x)=>s+x.setup,0);return {minutes,value,setup,payback:minutes>0?setup/minutes:null,done:items.filter(x=>x.status==='done').length};}
  function csv(items){const escape=v=>'"'+String(v).replace(/^[=+@\-\t\r]/,"'$&").replaceAll('"','""')+'"';return '\uFEFF'+[['Công việc','Trạng thái','Nhóm','Phút trước','Phút sau','Lần/tuần','Tiết kiệm phút/tuần'],...items.map(x=>[x.title,x.status,x.category,x.before,x.after,x.frequency,weekly(x)])].map(r=>r.map(escape).join(',')).join('\r\n');}
  const api={validate,weekly,metrics,csv};if(typeof module!=='undefined')module.exports=api;else root.PPB=api;
})(typeof globalThis!=='undefined'?globalThis:this);
