(function () {
    let receiverID;
    const socket = io();

    function generateID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
            .replace(/[xy]/g, function (c) {
                const r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
    }

    document.querySelector('#sender-start-con-btn').addEventListener('click',()=>{
        let joinID = generateID();
        document.querySelector('#join-id').innerHTML = `
            <b>Room ID</b>
            <span>${joinID}</span>
        `;

        socket.emit('sender-join',{
            uid: joinID
        });
    });

    socket.on("init",(uid)=>{
        document.querySelector('.join-screen').classList.remove('active');
        document.querySelector('.fs-screen').classList.add('active');
    })
})();