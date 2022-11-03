///initial set time get data from database for user start time 

///right after pressing the submit button on set reminder page
var time = db.collections('users').doc('user.uid')
time.get(reminders['start_time']).then(function (doc) {
    $('#break_time').html(doc.data().start_time);

    ///after pressing the "I've taken my break" button
    var time = db.collections('users').doc('user.uid')
    var start_time = time.get(reminders['start_time']).then()
    var interval = time.get(reminders['interval']).then()
    var new_break_time = start_time + interval
    time.update(reminders['start_time'], new_break_time)

    ///writing data from forms into reminder field
    db.collection('users').doc('user.uid').set({
        reminders: {
            start_time: $('#start_time').val(),
            interval: $('#interval').val(),
            end_time: $('#end_time').val()
        }
    })

    ///writing data from forms into personal goal field
    db.collection('users').doc('user.uid').set({
        personal_goal: $('#personal_goal').val()
    }
