var botBrain = {
    botName:'WashBucket ',
    botFeeling:'in love with Scruffy ',
    isGreeted: false,
    botRandomResponse: function(sentencesArray){
         var sentenceIndex = Math.floor(Math.random()* (sentencesArray.length -0));
         return sentencesArray[sentenceIndex];
    },

    botResponse:function(messageParam){
    //Salutation
        if(messageParam.search('BONJOUR')!= -1 ||
        messageParam.search('SALUT')!= -1 ||
        messageParam.search('OSU')!= -1 ||
        messageParam.search('HI')!= -1 ||
        messageParam.search('YO')!= -1 ||
        messageParam.search('BONSOIR')!= -1 ||
        messageParam.search('SALUTATION')!= -1
    ){
        // change la valeur de isgreeted
        this.isGreeted =true;
        //Réponse du bot1
        messagesBox.innerHTML += '<article><p>'+
        this.botRandomResponse(this.botSentences.botSayHello)
        +'</p></article>';
        };


        if(
            messageParam.search('BRUCELLOSE')!= -1||
            messageParam.search('MALADE')!= -1 ||
            messageParam.search('EPIDEMIE')!= -1 &&
            this.isGreeted ==true
        ){

            messagesBox.innerHTML += '<article><p>'+
            this.botRandomResponse(this.botSentences.botSayWant)
            +'</p></article>';

        }

        if(
            messageParam.search('YES')!= -1||
            messageParam.search('OUI')!= -1 ||
            messageParam.search('TOUT A FAIT')!= -1 ||
            messageParam.search('EXACT')!= -1 &&
            this.isGreeted ==true
        ){

            messagesBox.innerHTML += '<article><p>'+
            this.botRandomResponse(this.botSentences.botSayContinue)
            +'</p></article>';

        }

        if(
            messageParam.search('NO')!= -1||
            messageParam.search('NON')!= -1 ||
            messageParam.search('JE NE VEUX PAS')!= -1 ||
            messageParam.search('REFUS')!= -1 &&
            this.isGreeted ==true
        ){

            messagesBox.innerHTML += '<article><p>'+
            this.botRandomResponse(this.botSentences.botSayConfirm)
            +'</p></article>';

        }

        if(
            messageParam.search('SYMPTOMES')!= -1||
            messageParam.search('ACTION')!= -1 ||
            messageParam.search('DANGER')!= -1 ||
            messageParam.search('PATOLOGIE')!= -1 ||
            messageParam.search('MORT')!= -1 ||
            messageParam.search('DANGER')!= -1 ||
            messageParam.search('DANGEREUX')!= -1 &&
            this.isGreeted ==true
        ){

            messagesBox.innerHTML += '<article><p>'+
            this.botRandomResponse(this.botSentences.botSayInfoMaladie)
            +'</p></article>';

        }

        if(
            messageParam.search('MANGER')!= -1||
            messageParam.search('FROMAGE')!= -1 ||
            messageParam.search('RISQUE')!= -1 ||
            messageParam.search('EXPLOITATION')!= -1 ||
            messageParam.search('MORT')!= -1 ||
            messageParam.search('DANGER')!= -1 ||
            messageParam.search('DANGEREUX')!= -1 &&
            this.isGreeted ==true
        ){

            messagesBox.innerHTML += '<article><p>'+
            this.botRandomResponse(this.botSentences.botSayQui)
            +'</p></article>';

        }

        if(
            messageParam.search('QUE FAIRE')!= -1||
            messageParam.search('QUOI FAIRE')!= -1 ||
            messageParam.search('SI JE SUIS MALADE')!= -1 ||
            messageParam.search('EXPLOITATION')!= -1 ||
            messageParam.search('INFORMATIONS')!= -1 &&
            this.isGreeted ==true
        ){

            messagesBox.innerHTML += '<article><p>'+
            this.botRandomResponse(this.botSentences.botSayInfos)
            +'</p></article>';

        }

        if(
            messageParam.search('Merci')!= -1||
            messageParam.search('THX')!= -1 ||
            messageParam.search('THANKS')!= -1 ||
            messageParam.search('THANK YOU')!= -1 ||
            messageParam.search('CIMER')!= -1 &&
            this.isGreeted ==true
        ){

            messagesBox.innerHTML += '<article><p>'+
            this.botRandomResponse(this.botSentences.botSayThx)
            +'</p></article>';

        }

        if(
            messageParam.search('AU REVOIR')!= -1||
            messageParam.search('BYE')!= -1 ||
            messageParam.search('END')!= -1 ||
            messageParam.search('ADIEU')!= -1 &&
            this.isGreeted ==true
        ){

            messagesBox.innerHTML += '<article><p>'+
            this.botRandomResponse(this.botSentences.botSayBye)
            +'</p></article>';

        }
    },
    botSentences:{
        botSayHello:[
            'Bonjour, puis-je vous aider ?',
            'Bienvenue, en quoi puise-je vous renseigner ?'
        ],
        botSayWant:[
            'Souhaitez-vous avoir des renseignements sur la Brucellose ?'
        ],
        botSayContinue:[
            'Que souhaitez-vous savoir ?',
            'Nous sommes là pour vous renseigner et vous rassurer sur la qualité des fromages du département :)'
        ],
        botSayConfirm:[
            'Voulez-vous savoir autre chose ?'
        ],
        botSayInfoMaladie:[
            'SYMPTOMES',
        ],
        botSayQui:[
            'Infos fromages'
        ],
        botSayInfos:[
            'Veuillez voir ce lien wesh'
        ],
        botSayThx:[
            'De rien',
            'Un plaisir'
        ],
        botSayBye:[
            'Au revoir',
            ' A bientôt'
        ]
    }
};

botBrain.botRandomResponse(botBrain.botSentences.botSayHello);


//selectionner les balises HTML en JS
var chatBox = document.getElementById('chatBox');
var userMessage = document.getElementById('userMessage');
var messagesBox = document.getElementById('messagesBox');




//capter l'évenement 'submit du formulaire
chatBox.addEventListener('submit',function(evt){
    //bloquer le comportement par defaut du formulaire
    evt.preventDefault();
    
    //reccup la valeur du input et analyser le nombre de caractere
    if(userMessage.value.length >0){
        //modifier le contenu HTML le la balise messagesBox
        messagesBox.innerHTML += '<article class="userMessage"><p>'+ userMessage.value +'</p></article>'

        //Mettre la valeur de la variable en majuscule
        var theMessage = userMessage.value.toUpperCase();

        //appeler la fonction du Bot pour afficher la réponse
        botBrain.botResponse(theMessage);
    };
    //vider valeur de l'input
    userMessage.value = '';
}); //callback : une fois capter on exe le code
