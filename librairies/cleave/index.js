new Cleave(".input-numero-tel", {
  phone: true,
  phoneRegionCode: "fr",
});

new Cleave(".input-numero-cb", {
  creditCard: true,
});

new Cleave(".input-code-postal", {
  blocks: [5],
  numericOnly: true,
});

new Cleave(".input-date-naissance", {
  date: true,
  delimiter: "/",
});

new Cleave(".input-montant", {
  numeral: true,
  delimiter: " ",
  numeralDecimalMark: ",",
  prefix: " €",
  noImmediatePrefix: true,
  tailPrefix: true,
  rawValueTrimPrefix: true,
  stripLeadingZeroes: true,
});
