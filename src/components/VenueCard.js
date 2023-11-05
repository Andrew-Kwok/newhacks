export default function VenueCard(
    id, venueName, picture, description, loc) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="picture" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    `${venueName}`
                        <div className="badge badge-secondary">`${loc}`</div>
                </h2>
                <p>`${description}`</p>
                {/*<div className="card-actions justify-end">*/}
                {/*    <div className="badge badge-outline">Fashion</div>*/}
                {/*    <div className="badge badge-outline">Products</div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}