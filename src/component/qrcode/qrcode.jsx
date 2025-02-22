import QRCode from 'react-qr-code';
export function QrCodeComponent(){
    return(
        <div>
            <QRCode value="../afterqrscan/afterscanqr.jsx" style={{width:"18vh"}}></QRCode>
        </div>
    )
}