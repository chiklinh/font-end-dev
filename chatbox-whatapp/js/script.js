$(document).ready(function () {
    var listchatModel = [
        {
            ImgPath: 'img/1.jpg',
            Name: 'Cô chủ nhỏ',
            Time: '11:08 AM',
            Desc: 'Anh yêu em',
            Notification: '0', // number notification
            Active: '1' // 2: unread - 1: avtive - 0: null
        },
        {
            ImgPath: 'img/2.jpg',
            Name: 'Cô chủ nhỏ',
            Time: '11:08 AM',
            Desc: 'Cố lên nhé!',
            Notification: '2', // number notification
            Active: '2' // 2: unread - 1: avtive - 0: null
        },
        {
            ImgPath: 'img/2.jpg',
            Name: 'Cô chủ nhỏ',
            Time: '11:08 AM',
            Desc: 'Cố lên nhé!',
            Notification: '0', // number notification
            Active: '0' // 2: unread - 1: avtive - 0: null
        },
        {
            ImgPath: 'img/2.jpg',
            Name: 'Cô chủ nhỏ',
            Time: '11:08 AM',
            Desc: 'Cố lên nhé!',
            Notification: '0', // number notification
            Active: '0' // 2: unread - 1: avtive - 0: null
        },
        {
            ImgPath: 'img/2.jpg',
            Name: 'Cô chủ nhỏ',
            Time: '11:08 AM',
            Desc: 'Cố lên nhé!',
            Notification: '0', // number notification
            Active: '0' // 2: unread - 1: avtive - 0: null
        },
        {
            ImgPath: 'img/2.jpg',
            Name: 'Cô chủ nhỏ',
            Time: '11:08 AM',
            Desc: 'Cố lên nhé!',
            Notification: '0', // number notification
            Active: '0' // 2: unread - 1: avtive - 0: null
        },
        {
            ImgPath: 'img/2.jpg',
            Name: 'Cô chủ nhỏ',
            Time: '11:08 AM',
            Desc: 'Cố lên nhé!',
            Notification: '0', // number notification
            Active: '0' // 2: unread - 1: avtive - 0: null
        },
        {
            ImgPath: 'img/2.jpg',
            Name: 'Cô chủ nhỏ',
            Time: '11:08 AM',
            Desc: 'Cố lên nhé!',
            Notification: '0', // number notification
            Active: '0' // 2: unread - 1: avtive - 0: null
        },
        {
            ImgPath: 'img/2.jpg',
            Name: 'Cô chủ nhỏ',
            Time: '11:08 AM',
            Desc: 'Cố lên nhé!',
            Notification: '0', // number notification
            Active: '0' // 2: unread - 1: avtive - 0: null
        }
    ]
    var content = "";
    listchatModel.forEach(function (model) {
        let isActive = ((model.Active == "1" && model.Notification == '0')
            ? "active"
            : ((model.Active == "2" && model.Notification != '0') ? "unread" : ""));

        let notified = ((model.Notification != '0' && model.Active == "2")
            ? ("<b>" + model.Notification + "</b>") : "");

        content += `
                <div class="block `+ isActive + `">
                    <div class="imgbx">
                        <img src="` + model.ImgPath + `" alt="" class="cover">
                    </div> 
                    <div class="details">
                        <div class="listHead">
                            <h4>` + model.Name + `</h4>
                            <p class="time">` + model.Time + `</p>
                        </div>
                        <div class="message_p">
                            <p>` + model.Desc + `</p> ` + notified + `
                        </div>
                    </div>
                </div>
            `;
    })
    document.getElementById("content-chatlist").innerHTML = content;
})