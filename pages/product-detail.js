import React, { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { database } from "../firebase/firebase-config"
const ProductDetail = (props) => {
    const [productDetail, setProductDetail] = useState({})
    useEffect(() => {
        getDetail()
    }, [])
    const getDetail = async () => {
        const docRef = doc(database, "products", `${window.location.search.split("=")[1]}`);
        const getDetail = await getDoc(docRef)
        try {
            if (getDetail) {
                let dataDetail = getDetail.data()
                setProductDetail(dataDetail)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const printDetailProduct = () => {
        if (productDetail.price) {
            return (
                <div className="row" style={{ alignItems: 'center', paddingTop: "7%" }}>
                    <div style={{ paddingBottom: '3vh', display: 'flex', }}>
                        <a href="/" className="mx-2 text-decoration-none" style={{ color: 'black' }}>Products</a>
                        <p style={{fontWeight:'bolder'}}>/ {productDetail.name}</p>
                    </div>
                    <div className="col-6">
                        <img
                            src={productDetail.images}
                            width="100%" />
                    </div>
                    <div className="col-6">
                        <h4 >{productDetail.name}</h4>
                        <p style={{ fontWeight: 'bolder', color: 'black' }}>{productDetail.weight} gram/pcs</p>
                        <h2 style={{ fontWeight: 'bolder', color: 'black' }}>Rp.{productDetail.price.toLocaleString()} </h2>
                        <div style={{ marginTop: 20 }}>
                            <p style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Stock:{productDetail.qty}</p>
                        </div>
                        <div>
                            <p style={{ borderTop: "1px solid grey", borderBottom: '1px solid grey', paddingTop: 10, paddingBottom: 10 }}>{productDetail.benefits}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="container-fluid" style={{ background: "linear-gradient(0deg, rgba(240,240,239,1) 34%, rgba(235,235,235,1) 55%)" }}>
            <div className="container" style={{ padding: 30 }}>
                <div className="shadow bg-white rounded" style={{ boxShadow: "", borderRadius: 10, height: "900px", padding: '20px', backgroundColor: 'white' }}>
                    <div className="row" style={{ paddingRight: '30px', paddingLeft: '30px' }}>
                        {printDetailProduct()}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ProductDetail