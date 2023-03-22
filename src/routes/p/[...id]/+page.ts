import type { ProductDetailVariables } from './$houdini';


export const _ProductDetailVariables: ProductDetailVariables = ({ params }) => {
    return {
        id: `gid://shopify/Product/${params.id}`
    }
}
