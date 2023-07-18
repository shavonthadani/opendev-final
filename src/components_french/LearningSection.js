import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function LearningSection_french() {
  return (
    <div className='cards' style={{ padding: "1px 1px" }} id='learn'>
      <div className="w3-row-padding w3-center" style={{ marginTop: 64 }}>
        <div class="w3-padding-16">
          <span class="w3-xlarge subtitle">Apprentissage</span>
        </div>
      </div>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/python.jpg')}
              text='Apprenez les bases de la programmation avec ce cours Python 101'
              label='Programmation'
              path='/'
            />
            <CardItem
              src={require('../images/java.jpg')}
              text='Apprenez la programmation orientée objet avec Java'
              label='Programmation'
              path='/'
            />
            <CardItem
              src={require('../images/github.jpg')}
              text='Apprenez les tenants et aboutissants du contrôle de version sur GitHub'
              label='Contrôle de Version'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/webdev.jpg')}
              text='Apprenez HTML CSS et JavaScript'
              label='Développement Web'
              path='/'
            />
            <CardItem
              src={require('../images/ml.jpg')}
              text='Apprenez à exploiter TensorFlow'
              label='Apprentissage Automatique'
              path='/'
            />
            <CardItem
              src={require('../images/c++.jpg')}
              text='Apprenez les systèmes embarqués avec C++'
              label='Systèmes Embarqués'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LearningSection_french;
