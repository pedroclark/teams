import {Container, Content, Icon} from "./styles";
import { Highlight } from "src/components/Highlight";
import { Button } from "src/components/Button";
import { Input } from "src/components/input";

import { Header } from "src/components/Header";
import { SafeAreaView } from "react-native";
export function NewGroup(){
    return (
        <Container>
            <Header showBackButton/>
            <Content>
                    <Icon
                    />
                    <Highlight title='nova turma'
                    subtitle=' cire a turma para adcionar pessoas'
                    />
                    <Input
                        placeholder="nome da turma"

                    />
                    <Button
                    title='Criar'
                    style={{ marginTop:20 }}
                    />
                    </Content>
        </Container>
        
    )
}

