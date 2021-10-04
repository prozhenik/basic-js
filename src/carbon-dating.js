const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

export default function dateSample(sampleActivity) {
  if ((typeof sampleActivity !== 'string') || (Number.isNaN(Number(sampleActivity)))) return false;
  let value = Number(sampleActivity);
  if (value <= 0 || value >= MODERN_ACTIVITY) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / value) / 0.693 * HALF_LIFE_PERIOD);
}