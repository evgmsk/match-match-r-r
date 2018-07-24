/**
 * project match-match-r-r
 */
import React from 'react';
import Card from '../ui/Card';

class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.cardId = props.cardId;
        this.cardName = props.cardName;
        this.skirt = props.skirt;
        this.face = props.face;
        this.turnFace = false;
        this.onDesk = true;
        this.openCard = this.openCard.bind(this);
        this.removeCard = this.removeCard.bind(this);
        this.setCardSkirt = this.setCardSkirt.bind(this);
        this.drawCard = this.drawCard.bind(this);
    }

    removeCard() {
        this.onDesk = !this.onDesk;
        document.getElementById(this.cardId).classList.toggle('out-desk');
    }

    setCardSkirt(skirt) {
        this.skirt = skirt;
        const cardElement = document.getElementById(this.cardId);
        if (cardElement)
            cardElement.querySelector('.card-skirt')
                .style.background = `${skirt} no-repeat center/100%`;
    }

    drawCard(deskNode) {
        setTimeout(() => { deskNode.insertAdjacentHTML('afterbegin', this.cardHtml); }, 200);
    }

    openCard() {
        document.getElementById(this.cardId).classList.toggle('opened');
        this.face = !this.face;
    }
}
