import Chance from 'chance';
import checkSpendQuota from '../../utils/check-spend-quota';

async function openMysteryBox() {
  const chance = new Chance();
  const prizes = [50, 100, 200, 500, 1000, 5000, 9000];

  if (chance.bool({ likelihood: 25 })) {
    // Check spend quota for current day
    const quota = await checkSpendQuota();

    return prizes[chance.integer({ min: 0, max: quota ? 6 : 5 })];
  } else {
    return false;
  }
}

export default openMysteryBox;  
