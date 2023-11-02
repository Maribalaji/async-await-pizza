let pizza={
    type:["veg","non-veg"],
    varity:["vegetable","chicken"],
    size:["regular","medium","large"],
    topping:["green pepper","mushroom","paneer","tomato","cheese"]

}
let isOpen=true;

function order(ms){
    return new Promise((resolve,reject)=>{
        if(isOpen){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log(`Shop is Closed`));
        }
    })

}

async function prepare(){
    try{
        await order()
        console.log(`Shop is Open`);
        console.log(`${pizza.type[1]} pizza was selected`);
        await order(2000)
        console.log(`Cooking is started`);
        await order(1000)
        console.log(`you selected ${pizza.varity[1]} pizza`);
        await order(2000)
        console.log(`${pizza.varity[1]} was added`);
        await order (1000)
        console.log(`your pizza size ${pizza.size[1]}`);
        await order(2000)
        console.log(`Start the Machine`);
        await order(2000)
        console.log(` ${pizza.topping[4]} as topping`);
        await order(2000)
        console.log(`serve pizza`);

    }
    catch(err){
        console.log(`Customer left`);
    }

}
prepare()