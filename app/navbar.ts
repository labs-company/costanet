const navigation = [
  { name: 'Costanet', href: '/', current: true },
  { name: 'Nosotros', href: '/#nosotros', current: false },
  { name: 'Servicios', href: '/#servicios', current: false },
  { name: 'Contacto', href: '/#contacto', current: false },
  { name: 'Test de Velocidad', href: '/#test', current: false },
  { name: 'PQR', href: '/pqrs', current: false },
  { name: 'PSE', href: '/pse', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export { navigation, classNames };
