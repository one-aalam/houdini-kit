<script lang="ts">
    import { graphql, fragment, type ProductInfo } from "$houdini";

    export let product: ProductInfo

    $: info = fragment(product, graphql(`
        fragment ProductInfo on Product {
            id
            title
            featuredImage {
                id
                url
            }
        }

    `))
</script>

<a href={`/p/${$info.id.substring($info.id.lastIndexOf('/') + 1, $info.id.length )}`} title={$info.title}>
    <div class="product-card flex flex-col">
        <img class="w-64" src={$info.featuredImage?.url} alt="">
        <div class="product-meta text-center px-2 py-1">
            <h3 class="text-bold">{$info.title}</h3>
        </div>
    </div>
</a>
