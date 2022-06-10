import React, { useEffect, useState } from 'react';
import { Input, Label, Button, Card, CardImg, CardBody, CardTitle, FormGroup } from "reactstrap"
import { database } from "../firebase/firebase-config"
import { addDoc, collection, getDocs } from "firebase/firestore"
import Link from 'next/link';
import Swal from 'sweetalert2';

const Homepage = (props) => {
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [weight, setWeight] = useState(null)
  const [price, setPrice] = useState(null)
  const [qty, setQty] = useState(null)
  const [benefits, setBenefits] = useState("")
  const [images, setImages] = useState("")
  const databaseRef = collection(database, "products")


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    await getDocs(databaseRef)
      .then((response) => {
        setProducts(response.docs.map((data) => {
          return { ...data.data(), id: data.id }
        }))
      })
  }
  const addData = () => {
    if (products.length == 6) {
      Swal.fire({
        title: 'You have reach the limit for adding product!',
        text: 'Sorry for now you can only add 6 products',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    } else {
      if (name == "" || weight == "" || price == "" || qty == null || benefits == "" || images == "") {
        Swal.fire({
          title: 'There is still blank input!',
          text: 'Make sure you fill all the input',
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
      }else{
        addDoc(databaseRef, {
          name: name,
          weight: Number(weight),
          price: Number(price),
          qty: Number(qty),
          benefits: benefits,
          images: images
        })
          .then(() => {
            Swal.fire({
              title: 'Add product success!',
              text: 'Product has been added',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            setName("")
            setWeight("")
            setPrice("")
            setQty("")
            setBenefits("")
            setImages("")
            getData()
          })
          .catch((err) => {
            console.log(err)
          })

      }
    }
  }
  const printProduct = () => {
    return products.map((data,index) => {
      return (
        <div key={index} className="col-4">
          <Link href={`/product-detail?id=${data.id}`}>
            <Card className="mb-3 shadow bg-white rounded" style={{ height: '370px', border: "none" }}>
              <CardImg
                src={data.images}
                width="100%"
              />
              <CardBody>
                <CardTitle style={{ fontWeight: "bolder", fontSize: 22 }}>{data.name}</CardTitle>
                <CardTitle tag="h5" style={{ fontWeight: "bolder", marginTop: 3 }}>Rp.{data.price.toLocaleString()}</CardTitle>
              </CardBody>
            </Card>
          </Link>
        </div>
      )
    })
  }
  return (
    <div className="container-fluid" style={{ background: "linear-gradient(0deg, rgba(240,240,239,1) 34%, rgba(235,235,235,1) 55%)" }}>
      <div className="container" style={{ padding: 30 }}>
        <div className="shadow" style={{ boxShadow: "", borderRadius: 10, height: "900px", padding: '20px', backgroundColor: 'white' }}>
          <h1 style={{ marginBottom: '28px', textAlign: 'center' }}>Click the product to see the details</h1>
          <div className="row" style={{ paddingRight: '30px', paddingLeft: '30px' }}>
            <div className="col-3 shadow bg-light rounded" style={{ boxShadow: "shadow mb-1 bg-white rounded", height: "590px", padding: '2%' }}>
              <h3>Add Product</h3>
              <FormGroup>
                <Label>Product Name</Label>
                <Input
                  onChange={e => setName(e.target.value)}
                  style={{ width: '100%' }}
                  value={name}
                  type="text" />
              </FormGroup>
              <div className="d-flex">
                <FormGroup>
                  <Label>Weight</Label>
                  <Input
                    onChange={e => setWeight(e.target.value)}
                    style={{ width: '100%' }}
                    value={weight}
                    type="number" />
                </FormGroup>
                <FormGroup style={{ marginLeft: '10px' }}>
                  <Label>Qty</Label>
                  <Input
                    onChange={e => setQty(e.target.value)}
                    style={{ width: '100%' }}
                    value={qty}
                    type="number" />
                </FormGroup>
              </div>
              <FormGroup>
                <Label>Price</Label>
                <Input
                  onChange={e => setPrice(e.target.value)}
                  style={{ width: '100%' }}
                  value={price}
                  type="number" />
              </FormGroup>
              <FormGroup>
                <Label>Benefits</Label>
                <Input
                  onChange={e => setBenefits(e.target.value)}
                  style={{ width: '100%' }}
                  value={benefits}
                  type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label>Images</Label>
                <Input
                  onChange={e => setImages(e.target.value)}
                  style={{ width: '100%' }}
                  value={images}
                  type="text" />
              </FormGroup>
              <Button style={{ width: "100%" }} onClick={addData}>Submit</Button>
            </div>
            <div className="col-9 row" style={{ paddingLeft: "28px" }}>
              {printProduct()}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Homepage