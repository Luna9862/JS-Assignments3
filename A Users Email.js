let appdetail = {
        name: 'Gmail',
        mailboxes: [
            'inbox',
            'junk',
            'sent',
            'spam',
            'drafts',
        ],
        drafts: [],
        contacts: [
            {name: 'Lourdes', lastMessage: "How, have you been? Did you get into your dream University."},
            {name: 'Diana', lastMessage: "Lets get brunch; so we can catch up on news!"},
        ],
        emails: [
            {MessageID: 'Myaccount@spectrummails.com', Subject: 'Bill', content:'Next Payment is Due soon', status:'sent'},
            {MessageID: 'Costco@digital.costco.com', Subject: 'Discounts', content:'Earth Day, Savings Event!', status:'draft'},
            {MessageID: 'cvs@express.medallia.com', Subject: 'Survey', content: 'Thank you for visiting, Please take survey', status:'draft'},
        ]
}
console.log(appdetail.mailboxes);
console.log(appdetail.emails);
console.log(appdetail.emails[1].content);
if (appdetail.emails[1].status === 'draft') {
    appdetail.emails[1].status = 'sent';
    console.log("Status marked as sent");

    function addDraftEmail(MessageID, Subject, content) {
        appdetail.drafts.push({
            MessageID: MessageID,
            Subject: Subject,
            content: content,
            status: 'draft'
        });
    }

    addDraftEmail('notifications@Discord.com', 'class-notifications', 'You have one new message');
    console.log(appdetail.drafts); 
}
