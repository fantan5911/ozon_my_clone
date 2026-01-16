import type { FC } from "react";
import {Link} from 'react-router-dom';

const Index: FC = () => {
    return (
        <div>
            Вы зашли на главную страницу
            <Link to="/products">Продукты</Link>
            <Link to="/login">Вход</Link>
        </div>
    );
};

export default Index;