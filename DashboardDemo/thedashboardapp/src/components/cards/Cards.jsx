'use client';
import Image from "next/image";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Link from "next/link";

export default function Cards() {
  return (
    <div className="card-container">
            <div className="card" style={{width: "18rem"}}>
                <Image 
                    src="/user-default.png"
                    className="card-img-top"
                    alt="product tab"
                    width={200}
                    height={200}
                />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
    </div>
  )
}
