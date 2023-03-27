let log = new log(document.querySelector('.log'));

let char = new Knigth ('0liver');
let monster = new LittleMonster();


const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start();