import React from 'react';

export default ({ continueDonor, continueRecepient }) => (
  <div>
    <button onClick={continueDonor}>Донор</button>
    <button onClick={continueRecepient}>Рецепиент</button>
  </div>
)