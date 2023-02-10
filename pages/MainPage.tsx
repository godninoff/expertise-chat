import React from "react";
import { MainApi } from "./api/MainApi";
import { IMessage, ISection, IStatement } from "./types/types";

const MainPage = () => {
  const [statements, setStatements] = React.useState<IStatement[]>([]);
  const [section, setSection] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [selectedSecction, setSelectedSection] = React.useState("");

  const handleStatementClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    (e.target as HTMLDivElement).classList.toggle("statements-block--show");
  };

  const handleSectionClick = (sectionId: string) => {
    setStatements(
      statements.map((statement: IStatement) => {
        const section = statement.sections?.find(({ id }) => id === sectionId);
        if (section && section.unreadCount) {
          statement.unreadCount = statement.unreadCount - section.unreadCount;
          section.unreadCount = 0;
        }
        return statement;
      })
    );
    setSection(sectionId);
    setSelectedSection(sectionId);
  };

  React.useEffect(() => {
    if (!section) return;

    api.getMessages(section).then((sectionRes) => {
      setMessages(sectionRes.messages);
    });
  }, [section]);

  const url = "http://localhost:3001";
  const api = new MainApi(url);

  React.useEffect(() => {
    api
      .getStatements()
      .then((statementsRes) => {
        setStatements(statementsRes);
      })
      .catch((e) => console.error(e.message));
  }, []);

  return (
    <div className="main-container">
      <div className="block-container">
        {statements.map((statement: IStatement) => {
          return (
            <div key={statement.id}>
              <div
                onClick={(e) => handleStatementClick(e)}
                className="statements-block"
                key={statement.id}
              >
                {statement.number}
                {statement.unreadCount ? (
                  <span className="unread-messages">
                    {statement.unreadCount}
                  </span>
                ) : null}
              </div>
              {statement.sections?.map((section: ISection) => {
                return (
                  <div
                    className={`section-block ${
                      section.id === selectedSecction ? "section-selected" : ""
                    }`}
                    onClick={() => handleSectionClick(section.id)}
                    key={section.id}
                  >
                    {section.name}

                    {section.unreadCount ? (
                      <span className="unread-messages">
                        {section.unreadCount}
                      </span>
                    ) : null}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="block-container">
        {messages.map((message: IMessage) => {
          return (
            <div
              key={message.id}
              className={`message-container ${
                message.isMy ? "row-reverse" : ""
              }`}
            >
              <div className="message">{message.text}</div>
              <span style={{ fontSize: "12px", alignSelf: "end" }}>
                {message.sendDate}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
