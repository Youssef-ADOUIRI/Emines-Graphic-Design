# Emines-Graphic-Design

Site web dynamique du club Emines graphic design doté d'une interface d'administration

Portofolio publique pour les projets des etudiants

```jsx
import { createRoot } from 'react-dom/client';

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

const root = createRoot(document.getElementById('container'));
root.render(<HelloMessage name="Taylor" />);
```