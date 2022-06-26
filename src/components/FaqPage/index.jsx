import "./styles.css";
import React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqPage = () => {
  return (
    <>
      <div className="faq-title">
        <Typography variant="h4">FAQ (Вопрос / Ответ)</Typography>{" "}
      </div>

      <div className="faq-content">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Как мне купить товар ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Выбираете нужный товар и нажимаете под ним кнопку "Купить"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              Как я получу товар после оплаты ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Как только Вы оплатите товар, он придет Вам на почту.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              Есть какие-либо гарантии на предоставляемый товар ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              На ключи/гифты гарантия пожизненная. На аккаунты от 15 минут до
              30, иногда продавцы предлагают пожизненную гарантию. Более
              подробно читайте в описании товара или в Дополнительной
              информации.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              Если я часто покупаю у Вас товар, могу ли я получить скидку ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Да, практически на весь товар предоставляются скидки в зависимости
              от количества совершенных Вами покупок. Либо после покупки Вы
              получите промо-код на следующую покупку.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              Могу ли я получить скидку за положительный отзыв о товаре ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Да, после того как Вы оплатили товар оставьте положительный отзыв
              в с пометкой "Хочу подарок" и ждите, обычно в течении 48 часов Вам
              отправят подарок в "Переписку". (Учтите, что не все продавцы
              предоставляют подарки, поэтому внимательно читайте описание
              товара)
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              Я купил аккаунт, но не могу войти в него, что делать?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Как правило гарантия на аккаунты действует 15-30 минут с момента
              продажи, но есть аккаунты с пожизненной гарантией, поэтому, если
              аккаунт не рабочий, то сразу же обратитесь через сайт Oplata.info
              {"->"} Мои Покупки {"->"} Купленный Товар {"->"} Переписка. И
              ждите ответа продавца в течении 24 часа.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default FaqPage;
