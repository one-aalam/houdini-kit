<script lang="ts">
    import { graphql, fragment, type ProductFullInfo } from "$houdini";

    export let product: ProductFullInfo

    $: info = fragment(product, graphql(`
        fragment ProductFullInfo on Product {
            id
            title
            description
            featuredImage {
                id
                url
            }
        }
    `))

</script>

<a href={`/p/${$info.id}`} title={$info.title}>
    <div class="product-card flex flex-col">
        <img class="w-64" src={$info.featuredImage?.url} alt="">
        <div class="product-meta text-center px-2 py-1">
            <h3 class="text-bold">{$info.title}</h3>
            <p>{$info.description}</p>
        </div>
    </div>
</a>
