function withBoxUnlocked(body) {
  let locked = box.locked;

  if (!locked) {
    return body();
  }

  box.unlock();

  try {
    return body();
  } finally {
    box.lock();
  }
}
