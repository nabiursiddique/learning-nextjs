import Image from 'next/image';
import localImage from '../../../public/next.svg'

const photos = () => {
    return (
        <div>
            <h5>Image from local file</h5>
            <Image src={localImage} alt='Image' />
            <br />
            <h5>Image form online sources</h5>
            <Image
                src={'https://images.pexels.com/photos/10671403/pexels-photo-10671403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                width={1000}
                height={1000}
                alt='internet Image' />
        </div>
    );
};

export default photos;