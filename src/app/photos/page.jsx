import Image from 'next/image';
import localImage from '../../../public/next.svg'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '700',
    subsets: ['latin']
});

const photos = () => {
    return (
        <div>
            <h5>Image from local file</h5>
            <Image src={localImage} alt='Image' />
            <br />
            <h5 className={roboto.className}>Image form online sources</h5>
            <Image
                className='resize'
                src={'https://images.pexels.com/photos/10671403/pexels-photo-10671403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                width={500}
                height={500}
                alt='internet Image' />
        </div>
    );
};

export default photos;