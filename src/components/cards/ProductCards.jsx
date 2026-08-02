import Handlebars from "handlebars";
import { useMemo } from "react";

const source = `
<section class="product-grid" aria-label="Catálogo de productos">
  {{#each products}}
    <article class="product-card">
      <div class="product-icon" aria-hidden="true">{{icon}}</div>
      {{#if featured}}<span class="badge">Recomendado</span>{{/if}}
      <h3>{{name}}</h3>
      <p class="product-size">{{size}}</p>
      <p>{{description}}</p>
      {{#if price}}
        <p class="price">L {{price}}</p>
      {{else}}
        <p class="price">Solicitar cotización</p>
      {{/if}}
      <a class="text-link" href="#/pedidos">Solicitar producto →</a>
    </article>
  {{/each}}
</section>`;

export default function ProductCards({ products }) {
  const html = useMemo(() => Handlebars.compile(source)({ products }), [products]);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
