export default function sendReceipt(order) {
    hasDataBeenReceived();

    function hasDataBeenReceived() {
        if (order.length === 0) {
            setTimeout(hasDataBeenReceived, 500);
        } else {
            postReceipt();
        }
    }

    async function postReceipt() {
        const orderList = order[0].order.map(item => {
            return `
            <li>
                <div style="display:flex; justify-content: space-between;">
                    <div>
                        <span class="white">${item}</span>
                    </div>
                    <div>
                        <span class="bold"><span>49</span><span class="white">,-</span></span>
                    </div>
                </div>
            </li>`
        });
        const orderItems = getOrderItems(orderList);

        function getOrderItems(orderList) {
            let itemsString = "";
            for(let i = 0; i < orderList.length; i++) {
                itemsString += orderList[i];
            }
            return itemsString;
        }

        const styles = `<style>
                            * {background-color: #101010; color: #fcf8ef; text-align:center;} 
                            div {background-color: #262626; border-radius: 0.5rem;}
                            h1, h2, h3, h4, p, ul, li, span {background-color: transparent;}
                            span, h1, li {color: #f2b705;}
                            .white {color: #fcf8ef;}
                            .bold {font-weight: 600;}
                            h3 {text-align: left;}
                            h4 {text-align: right;}
                            .p-3 {padding: 1rem;}
                            ul {padding-left: 1.4rem; border-bottom: 2px solid #6f6f6f;}
                        </style>`;       

        const emailHTML = `${styles}
                            <div class="p-3">
                                <h1>FooBar</h1> 
                                <h2>Order confirmation <span>#${order[0].id}</span></h2> 
                                <p><span>Hey ${order[0].name},</span><br>thank you for ordering!</p>
                                <h3>Order:</h3>
                                <ul>${orderItems}</ul>
                                <h4>Total: <span>${order[0].order.length * 49}</span>,-</h4>
                            </div>`

        const data = {
            "to": order[0].email,
            "subject": `Order confirmation #${order[0].id}`, 
            "html": emailHTML, 
            "company": "FooBar", 
            "sendername": "FooBar"
        }

        const postData = JSON.stringify(data);
        let jsonData = await fetch("https://foobar-a352.restdb.io/mail", {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-apikey": "60a3d37fe3b6e02545edaa27",
                "cache-control": "no-cache"
            },
            body: postData
        });
    }
    
    

    
}